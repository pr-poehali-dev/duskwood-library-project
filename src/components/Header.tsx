import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/catalog", label: "Каталог книг", icon: "BookOpen" },
    { path: "/search", label: "Поиск", icon: "Search" },
  ];

  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pinimg.com/736x/39/63/49/3963498a2c431df6b48759872d412a3a.jpg"
              alt="Duskwood Library Avatar"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">
                DUSKWOOD LIBRARY
              </h1>
              <p className="text-sm text-muted-foreground">SEARCH</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary text-foreground"
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Icon name="Menu" size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
