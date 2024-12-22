function Home() {
    const videos = [
        {
            "url": "https://www.youtube.com/embed/sJ_qQEEBp6U?si=7CCpRhmSaMgNSXxd",
            "embedUrl": "https://www.youtube.com/embed/sJ_qQEEBp6U"
        },
        {
            "url": "https://youtube.com/watch?v=-fp-fIkPeJk&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/-fp-fIkPeJk"
        },
        {
            "url": "https://youtube.com/watch?v=lKVZ8pJDlKw&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/lKVZ8pJDlKw"
        },
        {
            "url": "https://youtube.com/watch?v=fyPrH5LiXsc&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/fyPrH5LiXsc"
        },
        {
            "url": "https://youtube.com/watch?v=VvGb5WBYLQ4&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/VvGb5WBYLQ4"
        },
        {
            "url": "https://youtube.com/watch?v=5JJSMmIx36Q&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/5JJSMmIx36Q"
        },
        {
            "url": "https://youtube.com/watch?v=7WR60cHKR6M&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/7WR60cHKR6M"
        },
        {
            "url": "https://youtube.com/watch?v=bu96WpLMk9Y&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/bu96WpLMk9Y"
        },
        {
            "url": "https://youtube.com/watch?v=tXdY3gDoStE&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/tXdY3gDoStE"
        },
        {
            "url": "https://youtube.com/watch?v=ah5ZPO_gMSM&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/ah5ZPO_gMSM"
        },
        {
            "url": "https://youtube.com/watch?v=oJ6fSOkPUAs&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/oJ6fSOkPUAs"
        },
        {
            "url": "https://youtube.com/watch?v=O2hNKJNwnkU&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/O2hNKJNwnkU"
        },
        {
            "url": "https://youtube.com/watch?v=1CQ9kgYWtu8&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/1CQ9kgYWtu8"
        },
        {
            "url": "https://youtube.com/watch?v=sDO0Jy1RdzA&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/sDO0Jy1RdzA"
        },
        {
            "url": "https://youtube.com/watch?v=nvAunrDdXEA&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/nvAunrDdXEA"
        },
        {
            "url": "https://youtube.com/watch?v=7wANwfd3c38&feature=shared",
            "embedUrl": "https://www.youtube.com/embed/7wANwfd3c38"
        },
        {
            "url": "https://youtu.be/P6zfaqIs85k?si=DlC-3enLoEiXmW47",
            "embedUrl": "https://www.youtube.com/embed/P6zfaqIs85k"
        }
    ]
    return (
        <>
            <div className="w-full flex justify-center items-center bg-[#242424] p-2">
                <h1 className="text-xl"> Kids (Decada Digital)</h1 >
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map(video => (
                    <div className="bg-white rounded-md shadow-md">
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/sJ_qQEEBp6U?si=7CCpRhmSaMgNSXxd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                        <iframe src={video.embedUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Home
