import Header from "@/components/Header";
import BookCard from "@/components/BookCard";
import Icon from "@/components/ui/icon";

const featuredBooks = [
  {
    id: 1,
    title: "V - значит Вендетта",
    author: "Алан Мур",
    type: "book" as const,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    link: "https://interactive-book-vendetta--preview.poehali.dev/",
    description: "Интерактивная графическая новелла о борьбе за свободу",
  },
  {
    id: 2,
    title: "Полночь в Дасквуде",
    author: "С. Куин",
    type: "book" as const,
    image:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
    description: "Мистический триллер в темных улицах города",
  },
  {
    id: 3,
    title: "Мертвый город",
    author: "Everbyte Studio",
    type: "game" as const,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop",
    description: "Детективная игра с элементами хоррора",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 text-primary">
            Добро пожаловать в Дасквуд
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Откройте для себя коллекцию мистических книг и интерактивных
            историй, скрытых в темных углах нашей библиотеки
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/catalog"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
            >
              <Icon name="BookOpen" size={20} />
              <span>Посмотреть каталог</span>
            </a>
            <a
              href="/search"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors flex items-center space-x-2"
            >
              <Icon name="Search" size={20} />
              <span>Начать поиск</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Рекомендуемые издания</h3>
            <p className="text-muted-foreground">
              Самые популярные книги и игры из нашей коллекции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <p className="text-muted-foreground">Уникальных изданий</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <p className="text-muted-foreground">Книг</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <p className="text-muted-foreground">Интерактивных игр</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
