// src/pages/ScrollDemo/index.jsx
import React from "react";
import GoToTop from "../../components/GoToTop";
import styles from "./ScrollDemo.module.scss";

function ScrollDemoPage() {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Curabitur pretium, sem et finibus euismod, sem enim malesuada tortor, non tincidunt orci est ut quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eu nunc id justo pulvinar consequat. Proin ac mauris eu ex posuere lacinia. Nam in metus in odio commodo facilisis in a justo. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

  Fusce congue, turpis in ullamcorper ultrices, lectus mi congue elit, vel tincidunt ipsum sapien vitae elit. Nullam sollicitudin, justo in rhoncus cursus, justo mauris dictum justo, a consectetur felis dolor non massa. Integer eu erat ac nunc viverra commodo a sit amet lectus. Maecenas ac mi eu odio varius interdum. Nulla facilisi. Praesent sit amet est eget ipsum tristique consectetur. Aliquam erat volutpat.

  Vivamus bibendum, sapien at tincidunt ullamcorper, felis sapien hendrerit velit, in mattis elit lacus ac magna. Quisque eget justo nec ipsum lacinia consectetur. Nunc ac enim id ipsum volutpat aliquet. Donec in tortor ac risus euismod interdum. Proin a est eget mi gravida lacinia. Integer ac justo non nulla facilisis gravida. Sed eleifend, sapien non bibendum suscipit, ipsum mauris volutpat arcu, in faucibus felis nunc a elit.

  Donec dictum neque vitae velit vestibulum, eget finibus urna suscipit. Suspendisse potenti. Etiam vel justo at justo fringilla gravida. Ut vel magna ut odio ullamcorper tincidunt. Phasellus eu ligula ac odio luctus feugiat. Sed euismod, libero in gravida pharetra, magna quam efficitur arcu, a consequat purus arcu vel lectus.

  Vestibulum id sapien non elit tristique venenatis. Curabitur vel tortor vel enim interdum tristique. Etiam malesuada, libero vel tincidunt congue, turpis felis malesuada sem, vel fermentum justo neque nec nisl. Mauris eget tellus nec velit volutpat eleifend. Nulla facilisi. Aliquam erat volutpat.

  Proin gravida libero nec lectus tristique, vel efficitur tellus ultrices. Duis eu eros eu justo consectetur vestibulum. Sed eu magna vitae ex scelerisque ullamcorper. Nunc nec mauris a lectus luctus feugiat. Integer a sapien eu ipsum bibendum fringilla. Aliquam erat volutpat.

  In hac habitasse platea dictumst. Sed in ex at velit efficitur bibendum. Vivamus ac odio ac turpis lacinia laoreet. Proin in odio eu dolor eleifend aliquet. Nam vel felis non odio feugiat tristique. Curabitur vel quam vitae odio malesuada interdum. Fusce quis mauris sit amet orci lacinia consequat.

  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non mi eu libero tincidunt eleifend. Mauris sit amet odio eu metus volutpat tincidunt. Integer a ipsum id enim suscipit vestibulum. Praesent vel dolor ac justo scelerisque efficitur.

  Aliquam erat volutpat. Ut eget purus a tortor consectetur ullamcorper. Curabitur vel turpis vel lectus consectetur tincidunt. Fusce a lectus ac sapien consectetur vestibulum. Sed non mi eu libero tincidunt eleifend. Mauris sit amet odio eu metus volutpat tincidunt. Integer a ipsum id enim suscipit vestibulum. Praesent vel dolor ac justo scelerisque efficitur.
  `;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Demo Go To Top Button</h1>
      <p className="text-center">
        Scroll xuống dưới để thấy nút "Go To Top" xuất hiện!
      </p>

      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={styles.section}>
            <h3>Phần nội dung {index + 1}</h3>
            <p>{loremIpsum}</p>
          </div>
        ))}

      <GoToTop />
    </div>
  );
}

export default ScrollDemoPage;
