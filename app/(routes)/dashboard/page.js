import React from 'react'
import Header from '@/app/(routes)/dashboard/_components/Header';
import WorkspaceList from '@/app/(routes)/dashboard/_components/WorkspaceList';

function Dashboard () {
	return (
		<div>
			<Header/>
			<WorkspaceList/>
		</div>
	)
}

export default Dashboard

