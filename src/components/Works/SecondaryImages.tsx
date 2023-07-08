export default function SecondaryImages(props: any){
    return (
        <div className="mt-[120px] tabletL:mt-[100px] grid grid-cols-2 gap-5 tabletL:w-full tabletM:grid-cols-1">
            {props.children}
        </div>
    )
}