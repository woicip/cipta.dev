import { motion } from "framer-motion"

export default function ImageHighlight(props: any){

    const { layoutId } = props;

    return (
        <motion.div layoutId={layoutId} className="mt-[100px] h-[700px] laptopM:h-[600px] screen-1170px:h-[500px] tabletL:h-[450px] tabletM:h-[350px] mobileL:h-[250px] tabletL:rounded-[25px] rounded-[50px] overflow-hidden relative">
            {props.children}
        </motion.div>
    )
}