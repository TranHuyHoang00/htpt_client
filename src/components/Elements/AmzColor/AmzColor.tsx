import { Col, ColorPicker, ColorPickerProps, Divider } from 'antd'

export type AmzColorProps = ColorPickerProps & {
  popupWidth?: number
  pickerWidth?: number
}
export function AmzColor({
  className,
  popupWidth = 234,
  pickerWidth = 234,
  disabledAlpha = true,
  showText = true,
  size = 'middle',
  presets = [
    {
      label: 'Recommended',
      colors: ['#040930', '#396AFF', '#0DB691', '#FF8282', '#FF2929', '#A09C9C', '#FFC107', '#93A689'],
    },
  ],
  ...props
}: AmzColorProps) {
  return (
    <Col>
      <ColorPicker
        size={size}
        showText={showText}
        className={className}
        disabledAlpha={disabledAlpha}
        styles={{
          popupOverlayInner: {
            width: popupWidth + 24,
          },
        }}
        presets={presets}
        panelRender={(_, { components: { Picker, Presets } }) => (
          <div
            className="custom-panel flex flex-col"
            style={{
              width: popupWidth,
            }}
          >
            <div
              style={{
                width: pickerWidth,
              }}
            >
              <Picker />
            </div>
            <Divider
              type="horizontal"
              className={'my-4'}
              style={{
                height: 'auto',
              }}
            />
            <div
              style={{
                flex: 1,
              }}
            >
              <Presets />
            </div>
          </div>
        )}
        {...props}
      />
    </Col>
  )
}

AmzColor.displayName = 'AmzColor'
