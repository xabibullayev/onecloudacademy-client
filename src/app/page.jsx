import Navbar from "@/components/navbar/Navbar";
import styles from "./page.module.css";
import Main from "@/components/main/Main";
import Categories from "@/components/categories/Categories";
import About from "@/components/about/About";
import Courses from "@/components/courses/Courses";
import Choose from "@/components/choose/Choose";
import Team from "@/components/team/Team";
import Subscribe from "@/components/subscribe/Subscribe";
import Testimonial from "@/components/testimonial/Testimonial";
import Classes from "@/components/classes/Classes";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Main />
      <Categories />
      <About />
      <Courses />
      <Choose />
      <Team />
      <Subscribe />
      <Testimonial />
      <Classes />
      <Contact />
      <Footer />
    </div>
  );
}
