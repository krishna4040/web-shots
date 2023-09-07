import Card from './Card'

export default function Liked({liked}) {

    return(
        <div className='grid items-center justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-3'>
            {
                liked.map((element , index) => {
                    return (<Card
                        author={element.author}
                        content={element.content}
                        desc={element.desc}
                        date={element.date}
                        source={element.source}
                        title={element.title}
                        url={element.url}
                        img={element.img}
                        id={element.id}
                        key={index}
                    />)
                })
            }
        </div>
    )
}