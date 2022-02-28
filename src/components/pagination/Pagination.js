import React, { useState, useEffect, ReactElement } from "react"
import PropTypes from 'prop-types';
import { Button } from "@chakra-ui/react";

export default function Pagination (props) {
	// We start with an empty list of items.
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		// Fetch items from another resources.
		const endOffset = itemOffset + props.itemsPerPage;
		console.log(`Loading items from ${itemOffset} to ${endOffset}`);
		setCurrentItems(props.items.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(props.items.length / props.itemsPerPage));
	}, [itemOffset, props.itemsPerPage]);

	// Invoke when user click to request another page.
	const handlePageClick = (event) => {
		const newOffset = (event.selected * props.itemsPerPage) % props.items.length;
		console.log(
		`User requested page number ${event.selected}, which is offset ${newOffset}`
		);
		setItemOffset(newOffset);
	};

	return(
		<React.Fragment>
		{currentItems && currentItems.map((item, index) => (
			<props.render item={item} index={index} />
    	))}
		<Button onClick={handlePageClick()}>Next</Button>
		</React.Fragment>
	)
}

Pagination.propTypes = {
	items: PropTypes.array.isRequired,
	render: PropTypes.element,
	itemsPerPage: PropTypes.number,
	pageCount: PropTypes.number,
}

Pagination.defaultProps = {
	itemsPerPage: 3,
}