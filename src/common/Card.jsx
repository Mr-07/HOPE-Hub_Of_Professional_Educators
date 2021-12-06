import React from 'react'
import Image from 'common/Image.jsx';
import ContentBlock from 'common/ContentBlock.jsx';

function Card({ content }) {
    return (
        <section key={content.id}>
            <div className={`${content.containerClass}`}>
                <div className={`${content.splitClass}`}>
                    {
                        (content.imagePosition == 'left') ?
                            <Image
                                source={content.imageUrl}
                                imageClass={content.imageClass}
                            />
                        :
                            null
                    }
                    <ContentBlock
                        title={`${content.title}`}
                        titleClass={`${content.titleClass}`}
                        descriptionClass={`${content.descriptionClass}`}
                        points={'points' in content ? content.points : null}
                        accordions={'accordions' in content ? content.accordions : null}
                        description={'description' in content ? content.description : null}
                        taglineClass={'taglineClass' in content ? `${content.taglineClass}` : null}
                    />
                    {
                        (content.imagePosition == 'right') ?
                            <Image
                                source={content.imageUrl}
                            />
                        :
                            null
                    }
                </div>
            </div>
        </section>
    )
}

export default Card;
