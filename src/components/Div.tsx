import type { FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import type { WidthHeight } from "./WidthHeight";
import type { MinMaxWidthHeight } from "./MinMaxWidthHeight";

export type ReactDivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight> & MinMaxWidthHeight

export const Div: FC<DivProps> = ({
    width, height, style: _style, 
    minWidth, maxWidth, minHeight, maxHeight,
    ...props
}) => {
    const style = {
        ..._style, width, height,
        minWidth, maxWidth, minHeight, maxHeight,
    }
    return <div {...props} style={style} />
}