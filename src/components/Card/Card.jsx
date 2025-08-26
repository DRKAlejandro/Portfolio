import React from 'react';

const Card = ({ type, data }) => {
    return (
        <div className={`bg-secondary rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-quinary ${type === 'project' ? 'h-full' : ''
            }`}>

            <div className={`flex items-start mb-4 ${type === 'skill' ? 'flex-col text-center' : ''
                }`}>

                {data.image && (
                    <img
                        src={data.image}
                        alt={data.name}
                        className={`object-cover rounded-lg ${type === 'skill' ? 'w-16 h-16 mx-auto mb-4' :
                                type === 'project' ? 'w-full h-48 mb-4' :
                                    'w-12 h-12 mr-4'
                            }`}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                )}

                <div className={type === 'experience' ? 'flex-grow' : ''}>
                    <h3 className="text-xl font-semibold text-primary mb-2">{data.name}</h3>


                </div>
            </div>

            <div className="mt-4">
                {type === 'experience' && (
                    <div className="flex items-center justify-between text-xs text-tertiary">
                        <span>
                            {data.start_date && new Date(data.start_date).toLocaleDateString()} -{' '}
                            {data.end_date ? new Date(data.end_date).toLocaleDateString() : 'Present'}
                        </span>


                    </div>
                )}

                {type === 'project' && (
                    <div className="flex items-center justify-between">
                        {data.status && (
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${data.status === 'completed' ? 'bg-green-100 text-green-800' :
                                    data.status === 'active' ? 'bg-blue-100 text-blue-800' :
                                        data.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-gray-100 text-gray-800'
                                }`}>
                                {data.status}
                            </span>
                        )}


                    </div>
                )}


            </div>
        </div>
    );
};

export default Card;