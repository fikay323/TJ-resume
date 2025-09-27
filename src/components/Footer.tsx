export default function Footer() {
  return (
    <footer className="border-t border-[#283039] py-8 text-center sm:py-10">
      <p className="text-sm font-normal leading-normal text-[#9cabba]">
        © {new Date().getFullYear()} Timothy Joseph. All rights reserved.
      </p>
    </footer>
  );
}
