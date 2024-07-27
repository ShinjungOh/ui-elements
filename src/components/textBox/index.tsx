import cx from './cx'
import TextBox1 from "@/components/textBox/1_r";
import TextBox2 from "@/components/textBox/2_r";
import TextBox3 from "@/components/textBox/3_r";
import TextBox4V from "@/components/textBox/4_v";
import TextBox5 from "@/components/textBox/5_r";

const TextBoxes = () => {
  return (
    <div className={cx('TextBoxes')}>
      <h2>반응형 텍스트박스</h2>
      <TextBox1 />
      <TextBox2 />
      <TextBox3 />
      <TextBox4V />
      <TextBox5 />
    </div>
  )
}

export default TextBoxes
