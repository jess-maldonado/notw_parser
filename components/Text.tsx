import React, {FC} from 'react'
import {createUseStyles} from 'react-jss'
import clsx from 'clsx';

type TextProps = {
    color?: string 
    size?: number
    weight?:number
    className?:string
}

const useStyles = createUseStyles({
    text: {
        color: (p:TextProps) => p.color ?? '#FFFFFF',
        fontSize: (p:TextProps) => p.size ?? 18,
        margin: 10,
        fontWeight: (p:TextProps) => p.weight ?? 400,
        fontFamily: "Arvo"
    }
} )



const Text:FC<TextProps> = ({color, size, weight, className, children}) => {
    const classes = useStyles({color: color, size:size, weight:weight});

    return <p className={clsx(className,classes.text)}>
    {children}
    </p>

}

export default Text;