import 'react-phone-input-2/lib/style.css'
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2'

export type AmzPhoneInputProps = PhoneInputProps & { enableSearch?: boolean }

export const AmzPhoneInput = ({ country = 'us', enableSearch = true, value, onChange, ...props }: AmzPhoneInputProps) => {
  // Ensure value always has a prefix of "+"
  const prefixedValue = value && !value.startsWith('+') ? `+${value}` : value

  // Custom onChange to maintain prefix
  const handlAmzhange = (newValue: string) => {
    if (newValue.startsWith('+')) {
      //@ts-ignore
      onChange(newValue)
    } else if (newValue === '+') {
      // If the user removes the prefix, set the value to an empty string
      //@ts-ignore
      onChange('')
    } else {
      //@ts-ignore
      onChange(`+${newValue}`)
    }
  }

  return <PhoneInput country={country} enableSearch={enableSearch} value={prefixedValue} onChange={handlAmzhange} {...props} />
}

AmzPhoneInput.displayName = 'AmzInputPhone'
