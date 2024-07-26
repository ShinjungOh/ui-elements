import TextBox1 from './1_r'
import cx from './cx'

const TextBoxes = () => {
  return (
    <div className={cx('TextBoxes')}>
      <h2>반응형 텍스트박스</h2>
      <TextBox1 />
    </div>
  )
}

export default TextBoxes
