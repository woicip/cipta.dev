export default function WorksContainer(props: any){
    return (
        <div className="py-[200px] px-[450px] mt-[50px] tabletL:mt-[30px] laptopM:py-[150px] laptopM:px-[200px] screen-1170px:px-[350px] laptopL:px-[250px] laptopS:px-[50px] tabletM:px-[30px] mobileL:px-[20px] flex flex-col items-start justify-between">
            {props.children}
        </div>
    )
}