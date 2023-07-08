export default function HeadlineContainer(props: any){
    return (
        <div className="w-full py-[130px] px-[70px] tabletL:pb-0 tabletL:py-[60px] tabletL:px-[20px] tabletL:flex-col flex items-start justify-between">
            {props.children}
        </div>
    )
}