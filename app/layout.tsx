import "./globals.css";
import {
  fc_ekaluckbold,
  fc_ekaluckregular,
  Helvetica,
  notoSanThai,
} from "@utils/font";
import Transition from "@/components/Transition";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${fc_ekaluckbold.variable} ${fc_ekaluckregular.variable} ${Helvetica.variable} ${notoSanThai.variable} `}
    >
      <body className="h-screen w-full overflow-hidden bg-primaryOwn">
        {/* <Navbar /> */}
        <main>
          <Transition>{children}</Transition>
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
