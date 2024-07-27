import cx from "@/components/lineClamp/cx";
import LineClamp1 from "@/components/lineClamp/1_r";
import LineClamp2 from "@/components/lineClamp/2_r";
import LineClamp3V from "@/components/lineClamp/3_v";

const LineClamps = () => {
  return (
    <div className={cx('LineClamps')}>
      <h2>여러줄 말줄임</h2>
        <LineClamp1 />
        <LineClamp2 />
        <LineClamp3V />
    </div>
  )
}

export default LineClamps
