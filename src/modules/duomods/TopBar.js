import React, { useState } from 'react';

function TopBar({ userData, title }) {
	return (
		<div class="TopBar">
			<div>{userData?.streak?.count || 0}</div>
			<div>{title || `Welcome to ${userData?.logo}`}</div>
			<div>{userData?.lives || 0}</div>
		</div>
	)
};

export default TopBar;
