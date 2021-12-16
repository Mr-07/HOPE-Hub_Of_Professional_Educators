import React from 'react'
import Image from 'common/Image.jsx';
import ContentBlock from 'common/ContentBlock.jsx';
import { Row } from 'react-bootstrap';

function Card({ content }) {
    return (
        <Row key={content.id} className={`justify-content-between`}>
            <div className={content.containerClass} style={{padding: 'unset'}}>
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
                        description={'descriptionPoints' in content ? content.descriptionPoints: null}
                        taglineClass={'taglineClass' in content ? `${content.taglineClass}` : null}
                        isImagePresent={'imagePosition' in content ? true : false}
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
        </Row>
    )
}

export default Card;
