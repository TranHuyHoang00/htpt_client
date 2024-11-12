import { Table as AntdTable, TableProps } from "antd";
import clsx from "clsx";
import { Reference } from "rc-table";
import React from "react";
import type { ResizeCallbackData } from "react-resizable";
import { Resizable } from "react-resizable";
import "./style.css";
export interface AmzTableProps<RecordType> extends TableProps<RecordType> {
  resizeable?: boolean;
}

export const ResizableTitle = (
  props: React.HTMLAttributes<any> & {
    onResize: (e: React.SyntheticEvent, data: ResizeCallbackData) => void;
    width: number;
  }
) => {
  const { onResize, width, ...restProps } = props;
  if (!width) {
    return <th {...restProps} />;
  }

  return (
    //@ts-ignore
    <Resizable
      width={width}
      height={0}
      handle={
        (
          <span
            className="react-resizable-handle"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        ) as React.ReactNode
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export const AmzTableInner = <RecordType extends object>(
  { className, ...props }: AmzTableProps<RecordType>,
  ref?: React.ForwardedRef<Reference>
) => {
  return (
    <AntdTable
      ref={ref}
      className={clsx("", className)}
      scroll={{ x: "max-content" }}
      {...props}
    />
  );
};
export const AmzTable = React.forwardRef(AmzTableInner) as <T>(
  props: AmzTableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof AmzTableInner>;

AmzTableInner.displayName = "AmzTableInner";
//@ts-ignore
AmzTable.displayName = "AmzTable";
