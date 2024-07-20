import cx from "@/components/tooltip/cx";
import Tooltip1 from "@/components/tooltip/1_r";
import Tooltip2 from "@/components/tooltip/2_r";
import Tooltip3 from "@/components/tooltip/3_r";

const Tooltips = () => {
    return (
        <div className={cx('Tooltips')}>
            <h2>툴팁</h2>
            <Tooltip1 />
            <Tooltip2 />
            <Tooltip3 />
        </div>
    );
}

export default Tooltips;
