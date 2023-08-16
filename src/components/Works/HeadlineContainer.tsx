export default function HeadlineContainer(props: any){
    return (
        <div className="w-full py-[130px] px-[50px] tabletL:pb-0 tabletL:py-[60px] tabletL:px-[20px] tabletL:grid-cols-1 tabletL:gap-0 grid grid-cols-2 gap-[60px] items-start justify-between">
            {props.children}
        </div>
    )
}