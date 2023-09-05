import Card from './Card'

export default function News({articles}) {
    return(
        <div className='grid items-center justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-3'>
            {
                articles.map((element, index) => {
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
                    />);
                })
            }
        </div>
    );
}