import Conversation from "../model/conversation.js";

export const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })
        if (exist) {
            res.status(200).json('Conversation already exists!')
        } else {
            const newConvo = new Conversation({
                members: [senderId, receiverId]
            })
            await newConvo.save()
            res.status(200).json('convo started')
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        let conversation = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })
        res.status(200).json(conversation)
    } catch (error) {
        res.status(500).json(error.message)
    }
}