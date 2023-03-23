import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUsers, faFileAlt } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    const links = [
        { name: 'Dashboard', icon: faChartBar },
        { name: 'Accounts', icon: faUsers },
        { name: 'Reports', icon: faFileAlt },
        { name: 'Dashboard', icon: faChartBar },
        { name: 'Accounts', icon: faUsers },
        { name: 'Reports', icon: faFileAlt },
        { name: 'Dashboard', icon: faChartBar },
        { name: 'Accounts', icon: faUsers },
        { name: 'Reports', icon: faFileAlt },
        { name: 'Dashboard', icon: faChartBar },
        { name: 'Accounts', icon: faUsers },
        { name: 'Reports', icon: faFileAlt },
        { name: 'Dashboard', icon: faChartBar },
        { name: 'Accounts', icon: faUsers },
        { name: 'Reports', icon: faFileAlt },
        { name: 'Dashboard', icon: faChartBar },
        { name: 'Accounts', icon: faUsers },
        { name: 'Reports', icon: faFileAlt },
        { name: 'Dashboard', icon: faChartBar },
        { name: 'Accounts', icon: faUsers },
        { name: 'Reports', icon: faFileAlt },
        { name: 'Dashboard', icon: faChartBar },
        { name: 'Accounts', icon: faUsers },
        { name: 'Reports', icon: faFileAlt },
    ];

    return (
        <aside className="fixed top-20 flex flex-col w-52 h-screen overflow-y-auto justify-between flex-1 border-r border-white">
            <nav>
                {links.map(({ name, icon }, index) => (
                    <a
                        key={index}
                        className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                        href="#"
                    >
                        <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-4" />
                        <span className="font-medium">{name}</span>
                    </a>
                ))}
            </nav>

            <div className="flex items-center px-4 -mx-2">
                <img className="object-cover w-10 h-10 mx-2 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" />
                <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
            </div>
        </aside >
    );
};