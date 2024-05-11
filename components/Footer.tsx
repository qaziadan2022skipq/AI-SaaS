import { resourcesLinks, platformLinks, communityLinks } from "../constants/landing-page-constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 px-4 border-y-purple-500">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-1 lg:col-span-2 pl-0 lg:pl-10">
          <h3 className="text-md font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600">Contact</h3>
          <ul className=" space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600 text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-md font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;