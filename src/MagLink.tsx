import { useRef } from "react";
import { gsap } from "gsap";
import { TbArrowUpRight } from "react-icons/tb";

interface Props {
  type: string;
}

const MagneticLink: React.FC<Props> = ({ type }: any): JSX.Element => {
  const ML = ({
    children,
    className,
    speed = 1,
    tolerance = 0.8,
    scale = 1.2,
    debug = false,
    borderRadius = 0,
    ...props
  }: any) => {
    const $root: any = useRef();
    const $item: any = useRef();
    const $hover: any = useRef();
    const rootBound: any = useRef();
    const itemBound: any = useRef();
    const diffBound: any = useRef({ x: 0, y: 0 });

    const handleMouseEnter = () => {
      gsap.killTweensOf($item.current);
      gsap.set($hover.current, {
        scale: scale,
        borderRadius,
        background: debug ? "rgba(0, 125, 255, .4)" : "transparent",
      });

      rootBound.current = $root.current.getBoundingClientRect();
      itemBound.current = $item.current.getBoundingClientRect();
      diffBound.current.x =
        (rootBound.current.width * scale - rootBound.current.width) / 2;
      diffBound.current.y =
        (rootBound.current.height * scale - rootBound.current.height) / 2;
    };

    const handleMouseLeave = () => {
      gsap.killTweensOf($item.current!);
      gsap.to($item.current, {
        x: 0,
        y: 0,
        ease: "elastic.out(1.1, .4)",
        duration: 1,
      });
      gsap.set($hover.current, {
        scale: 1,
      });
    };

    const handleMouseMove = (e: any) => {
      const x = e.clientX || e.touches[0].clientX;
      const y = e.clientY || e.touches[0].clientY;

      const maxX =
        ((rootBound.current.width - itemBound.current.width) / 2) * tolerance;
      const maxY =
        ((rootBound.current.height - itemBound.current.height) / 2) * tolerance;

      const newX = gsap.utils.mapRange(
        0,
        rootBound.current.width * scale,
        -maxX,
        maxX,
        x - rootBound.current.x + diffBound.current.x
      );

      const newY = gsap.utils.mapRange(
        0,
        rootBound.current.height * scale,
        -maxY,
        maxY,
        y - rootBound.current.y + diffBound.current.y
      );

      gsap.killTweensOf($item.current);
      gsap.to($item.current, {
        x: newX,
        y: newY,
        ease: "power3.out",
        duration: speed,
      });
    };

    return (
      <button
        ref={$root}
        className={`magnetic-button ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onTouchStart={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleMouseLeave}
        {...props}
      >
        <span ref={$item} className="magnetic-button--item">
          {children}
        </span>
        <span ref={$hover} className="magnetic-button--hover" />
      </button>
    );
  };
  return (
    <ML
      className="button-2"
      scale={1}
      tolerance={1}
      speed={0.3}
      borderRadius="50%"
    >
      <a href="/about" className="inner">
        {type}
        <TbArrowUpRight size={16} />
      </a>
    </ML>
  );
};

export default MagneticLink;
