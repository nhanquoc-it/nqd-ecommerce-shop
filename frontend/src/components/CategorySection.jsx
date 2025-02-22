import GlassesCategory from "../assets/images/categories/glasses.png";
import JacketsCategory from "../assets/images/categories/jackets.png";
import WatchesCategory from "../assets/images/categories/watches.png";
import ClothesCategory from "../assets/images/categories/clothes.png";

const categories = [
	{
		title: "Glasses",
		imageUrl: GlassesCategory,
		alt: "Glasses",
	},
	{
		title: "Jackets",
		imageUrl: JacketsCategory,
		alt: "Jackets",
	},
	{
		title: "Clothes",
		imageUrl: ClothesCategory,
		alt: "Clothes",
	},
	{
		title: "Watches",
		imageUrl: WatchesCategory,
		alt: "Watches",
	},
];

const CategorySection = () => {
	return (
		<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{categories.map((category, index) => (
				<div
					key={index}
					className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
				>
					<img
						src={category.imageUrl}
						alt={category.alt}
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
					<div className="absolute top-20 left-12">
						<p className="text-xl font-bold">{category.title}</p>
						<p className="text-gray-600">View All</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default CategorySection;
