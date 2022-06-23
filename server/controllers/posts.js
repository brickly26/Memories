
export const getPosts = (req, res) => {
    try {
        res.send('this works')
    } catch (error) {
        console.log(error.message)
    }
}