import { useReducer } from 'react';
import categories from '@/data/sidebarData.json';
import getIcon from './SidebarLogo';

function reducer(state: number[], action: { type: "TOGGLE_DROPDOWN"; index: number }): number[] {
    switch (action.type) {
        case "TOGGLE_DROPDOWN":
            if (state.includes(action.index)) {
                return state.filter((i: number) => i !== action.index);
            } else {
                return [...state, action.index];
            }
        default:
            return state;
    }
}

export default function Sidebar() {

    const [openIndices, dispatch] = useReducer(reducer, []);

    return (
        <nav className="fixed top-20 flex flex-col w-52 h-[calc(100vh-5rem)] overflow-y-auto flex-1 hide-scrollbar">
            {categories.map(({ name, components }, index) => (
                <div key={index} className="mt-5">
                    <button
                        className="flex items-center px-4 py-2 transition-colors duration-300 transform rounded-3xl hover:bg-light-blue hover:bg-opacity-10 text-left focus:outline-none"
                        onClick={() => dispatch({ type: 'TOGGLE_DROPDOWN', index })}
                    >
                        {getIcon(openIndices.includes(index))}
                        <span className="font-medium">{name}</span>
                    </button>
                    {openIndices.includes(index) && (
                        <div className="ml-8 mt-1 flex flex-col space-y-1">
                            {components.map(({ name, href }, index) => (
                                <a key={index} className="inline-block px-4 py-1" href={href}>
                                    <span className="px-4 py-2 transition-colors duration-300 transform rounded-3xl hover:bg-light-blue hover:bg-opacity-10">
                                        {name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
}