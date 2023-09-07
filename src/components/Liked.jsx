import Card from './Card'

export default function Liked({liked}) {

    return(
        <div>
            {
                liked.map((element , index) => {
                    return (<Card
                        author={element.author}
                        content={element.content}
                        desc={element.description}
                        date={element.publishedAt}
                        source={element.source.name}
                        title={element.title}
                        url={element.url}
                        img={element.urlToImage}
                        id={index}
                        key={index}
                    />)
                })
            }
        </div>
    )
}