
export default t =  {
    goNext: (nextStep) => {
        window.scrollTo(0, 0)
        nextStep(step => step + 1)
    },
    goBack: (nextStep) => {
        window.scrollTo(0, 0)
        nextStep(step => step - 1)
    },
    getYTVideoData: async (value, axios) => {
        let id = new URLSearchParams(value.split("?")[1]).get("v")
        let data = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDfVjAamPJLDio8uaH_6eiojZNBFgJrf_k&part=snippet&id=${id}`)
        let { title, thumbnails } = data.data.items[0].snippet
        return {
            url: value,
            thumbnail: thumbnails.default.url,
            title
        }
    },
    getVimeoVideoData: async (value, axios) => {
        let id = value.split("/").pop()
        let data = await axios.get(`http://vimeo.com/api/v2/video/${id}.json`)
        let { title, thumbnail_large } = data.data[0]
        return {
            url: value,
            thumbnail: thumbnail_large,
            title
        }
    }
}
