import ReplyWidget from "@/components/ReplyWidget";
import PostWidget from "@/components/PostWidget";
import uniqid from 'uniqid';

export default function Page() {
    return (
        <section className="h-full w-full flex flex-col text-white items-center justify-center">
            {/** Latest post */}
            <div className="flex flex-col justify-start items-center h-1/2 w-full">
                <h1 className="font-bold text-5xl h-1/6">Latest Post</h1>
            </div>

            {/** Latest comment */}
            <div className="flex flex-col justify-center items-center w-3/4 h-1/2 gap-12">
                <h1 className="font-bold text-5xl h-1/6">Latest Comment</h1>
                <div className="w-1/2 h-full">
                </div>
            </div>
        </section>
    );
}