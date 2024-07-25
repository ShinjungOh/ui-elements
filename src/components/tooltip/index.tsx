import cx from "@/components/tooltip/cx";
import Tooltip1 from "@/components/tooltip/1_r";
import Tooltip2 from "@/components/tooltip/2_r";
import Tooltip3 from "@/components/tooltip/3_r";
import Tooltip4 from "@/components/tooltip/4_r";

const Tooltips = () => {
    return (
        <div className={cx('Tooltips')} style={{
            marginBottom: 500
        }}>
            <h2>툴팁</h2>
            <Tooltip1 />
            <Tooltip2 />
            <Tooltip3 />
            <Tooltip4 />
        </div>
    );
}

export default Tooltips;
