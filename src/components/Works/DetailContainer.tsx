export default function DetailContainer(props: any){
    return (
        <div className="w-full mt-[130px] tabletL:mt-[100px] tabletM:mt-[80px] flex items-center justify-between tabletL:grid tabletL:grid-cols-2 tabletL:gap-[20px]">
            {props.children}
        </div>
    )
}