import { useDispatch, useSelector } from "react-redux";
import { like, unlike } from './store/slice/slice'
import { AiFillHeart} from 'react-icons/ai'
import toast from "react-hot-toast";

export default function Card({ author, content, desc, date, source, title, url, img, id }) {

    const { liked } = useSelector(state => state);
    const dispacth = useDispatch();

    const likeHandler = () => {
        const post = {
            id: id,
            author: author,
            content: content,
            desc: desc,
            date: date,
            source: source,
            title: title,
            url: url,
            img: img
        };
        dispacth(like(post));
        toast.success("Post liked!!",{
            style:{
                fontFamily: 'ubuntu'
            }
        });
    }

    const unlikeHandler = () => {
        dispacth(unlike(id));
        toast.error("post unLiked!!",{
            style:{
                fontFamily: 'ubuntu',
            }
        });
    }

    if (img == null) {
        return;
    }

    return (
        <div className="flex flex-col justify-center px-4 py-1 border lg:min-h-[500px] min-h-[450px] gap-1 bg-slate-50 dark:bg-zinc-800 dark:text-white dark:border-black hover:scale-105 duration-200">

            <h1 className="text-xl font-bold">{title.split(' ').slice(0, 5).join(' ')}...</h1>

            <div className="relative flex items-center justify-center w-full overflow-hidden group">

                <img src={img} alt="#" className="w-full" />

                {
                    liked.some(item => item.id === id) ?
                        <button className="absolute bottom-0 right-0 lg:hidden group-hover:block" onClick={unlikeHandler}><AiFillHeart className="text-4xl text-red-500" /></button> :
                        <button className="absolute bottom-0 right-0 lg:hidden group-hover:block" onClick={likeHandler}><AiFillHeart className="text-4xl text-red-200" /></button>
                }

            </div>

            <p className="">{desc}</p>

            {/* <p>{content}</p> */}

            <a target="_blank" href={url} className="text-blue-600">Read Comlete article at <span className="font-bold text-blue-900">{source}</span></a>

            <div className="flex items-center gap-4">

                <span className="text-lg font-bold">Dated:</span>

                <span>{date.split('').slice(0, 10).join('')}</span>

            </div>

            <div className="flex items-center gap-2">

                <span className="text-lg font-bold">Author:</span>

                <span>{author}</span>

            </div>

        </div>
    )
}