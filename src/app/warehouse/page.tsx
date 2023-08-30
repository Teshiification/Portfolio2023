import { Card } from '@/components/ui';
import Link from 'next/link'

const Warehouse=() => {

  return (<div
        className="h-screen w-screen bg-vicious-black flex flex-row md:flex-col flex-wrap gap-10 justify-around place-items-center p-20">
            <LinkCard color={'orange'} title={"statistics"} link={"/warehouse/statistics"}/>   
            <LinkCard color={'teal'} title={"wallet"} link={"/warehouse/wallet"}/>   
      </div>);
}

interface LinkCardProps {
    color?: string,
    image?: string,
    title: string,
    link: string,
} 
const LinkCard = (props:LinkCardProps) => {
    props={
        color:"orange",
        ...props,
    }

    return (
        <Link href={props.link} className="hover:animate-pulse hover:cursor-pointer">
            <Card color={props.color} width={40} height={40}>
                {props.image && <img src={props.image} className="h-full w-full place-self-center rounded-lg"/> || <label className="align-middle justify-self-center place-self-center text-6xl font-extralight font-serif italic">{props.title.slice(0,2)}</label>}
                <label className="absolute bottom-2 right-2 uppercase">{props.title}</label>
            </Card>
        </Link>
    )
}

export default Warehouse;