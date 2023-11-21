import React from "react";
import Image from "next/image";
import styles from "./Item.module.css";

export default function Item({ title, content, src }) {
	return (
		<>
			<div className=" mt-5 card_container overflow-hidden block max-w-[20rem] rounded-lg  bg-amber-300 hover:bg-amber-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
				<div className="p-0 text-center">
					<h2 className={styles.title_card}>{title}</h2>
				</div>
				<div className="relative overflow-hidden bg-cover bg-no-repeat">
					<Image className="rounded-t-lg" src={src} alt="" width={500} height={300} />
				</div>
				<div className="data_container p-3">
					<p className="text-base text-center data_container text-neutral-600 dark:text-neutral-800">
						{content}
					</p>
				</div>
			</div>
		</>
	);
}
