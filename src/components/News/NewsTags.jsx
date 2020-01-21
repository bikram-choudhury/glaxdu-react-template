import React from "react";
import { connect } from 'react-redux';
import { setAndFetchNewsOnTag } from "../../redux/actions/news.action";

function NewsTags(props) {
    const tags = props.tags;

    const getUpdatedNewsListAsTag = (tag) => {
        props.updateNewsTag(tag);
    }

    return (
        <div className="sidebar-tag-wrap">
            <div className="sidebar-title mb-40">
                <h4>Tag</h4>
            </div>
            <div className="sidebar-tag">
                <ul>
                    {
                        tags.map((tag, index) => (
                            <li key={index} onClick={() => getUpdatedNewsListAsTag(tag)}>
                                <span>{tag}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        tag: state.news && state.news.category || ''
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateNewsTag: (tag) => {
            dispatch(setAndFetchNewsOnTag(tag));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsTags);