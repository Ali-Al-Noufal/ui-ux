import { motion } from "framer-motion";

const Sliderx = () => {
  const items = ["🔥 عروض حصرية", "🚀 شحن سريع", "💎 جودة عالية"];
  return (
    <div style={{ overflow: "hidden", display: "flex", background: "#eee" }}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", whiteSpace: "nowrap", gap: "40px", padding: "10px" }}
      >
        {items.concat(items).map((item, i) => (
          <span key={i} style={{ fontSize: "20px" }}>{item}</span>
        ))}
      </motion.div>
    </div>
  )
}

export default Sliderx
