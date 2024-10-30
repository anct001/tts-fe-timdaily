
// Job Listing Component for Content2
const JobListing = ({ title, company, location, image }) => (
    <div className="bg-white text-black p-4 rounded-lg mb-4 flex items-center hover:bg-gray-100">
      <img src={image} alt={title} className="w-16 h-16 bg-gray-300 rounded-lg mr-4 object-cover" />
      <div className="flex-grow">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{company} • {location}</p>
      </div>
    </div>
  );

  export default JobListing;