import * as React from 'react'
import Svg, {SvgProps, Path, Circle} from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="prefix__r-13gxpu9 prefix__r-4qtqp9 prefix__r-yyyyoo prefix__r-179l7hd prefix__r-dnmrzs prefix__r-bnwqim prefix__r-1plcrui prefix__r-lrvibr prefix__r-10uooop"
      {...props}>
      <Path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858a.75.75 0 00-.53-.22h-.003a.74.74 0 00-.532.224l-4.317 4.384-1.813-1.806a.75.75 0 00-.53-.22c-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25a.75.75 0 01-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z" />
      <Circle cx={8.868} cy={8.309} r={1.542} />
    </Svg>
  )
}

export default SvgComponent
