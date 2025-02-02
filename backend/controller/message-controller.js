import Conversation from "../model/conversation.js"
import message from "../model/message.js"

export const newMessage = async (req, res) => {
    try {
        const newMessage = new message(req.body)
        await newMessage.save()
        const dat = await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text })
        console.log(dat);
        res.status(200).json('Message has been sent successfully')
    } catch (error) {
        res.status(500).json(error.message)

    }
}

export const getMessages = async (req, res) => {
    try {
        const messages = await message.find({ conversationId: req.params.id })
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}