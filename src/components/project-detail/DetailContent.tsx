import { ProjectContent } from "@/type/interface";
import style from "./detailContent.module.css";
import Image from "next/image";
import BriefGrid from "./BriefGrid";
import { DragEvent, useRef, useState } from "react";

const DetailContent = ({ project }: { project: ProjectContent }) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const moveValue = useRef({ startX: 0, offsetX: 0, nowX: 0, canIScroll: true, isSwiping: false });
  const [nowIndex, setNowIndex] = useState(1);

  const onMouseDown = (ev: React.MouseEvent) => {
    moveValue.current.isSwiping = true;
    moveValue.current.startX = ev.clientX;
  };
  const onMouseMove = (ev: React.MouseEvent) => {
    if (moveValue.current.isSwiping) {
      if (ev.clientX !== moveValue.current.startX) {
        moveValue.current.canIScroll = false;
        moveValue.current.offsetX = (moveValue.current.nowX + (ev.clientX - moveValue.current.startX));
        if (slideRef.current) {
          slideRef.current.style.transform = `translate3d(${moveValue.current.offsetX}px, 0px, 0px)`;
          slideRef.current.style.transitionDuration = "0ms";
        }
      }
    }
  };
  const onMouseUp = (ev: React.MouseEvent) => {
    if (moveValue.current.isSwiping) {
      const sum = moveValue.current.nowX + (ev.clientX - moveValue.current.startX);
      if (slideRef.current) {
        const slideWidth = slideRef.current.clientWidth;
        let destination = Math.round(sum / slideWidth) * slideWidth;
        if (destination > 0) {
          destination = 0;
        } else if (destination < -(slideWidth * (project.image.length - 1))) {
          destination = -(slideWidth * (project.image.length - 1));
        }
  
        if (Math.abs(moveValue.current.nowX) > Math.abs(destination)) {
          setNowIndex(prev => prev-1);
        }
        if (Math.abs(moveValue.current.nowX) < Math.abs(destination)) {
          setNowIndex(prev => prev+1);
        }

        slideRef.current.style.transform = `translate3d(${destination}px, 0px, 0px)`;
        slideRef.current.style.transitionDuration = "300ms";
        moveValue.current.nowX = destination;
      }
      moveValue.current.isSwiping = false;
      moveValue.current.canIScroll = true;
    };
  };

  const dragPrevent = (ev: DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
  };

  return (
    <article className={style.wrap}>
      <div className={style.upperImages}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
      >
        <div className={style.shell} ref={slideRef}>
          {project.image.map(img => <Image onDragStart={dragPrevent} key={img} src={img} alt={project.title} width={1000} height={1000} />)}
        </div>
      </div>
      <div className={style.count}>
        <h4>{nowIndex} /{project.image.length}</h4>
      </div>
      <div className={style.content}>
        <div>
          <h3>Explanation</h3>
          <p className={style.test}>{project.content}</p>
        </div>
        <div>
          <h3>Brief</h3>
          <BriefGrid project={project} />
        </div>
      </div>
    </article>
  )
}

export default DetailContent;
