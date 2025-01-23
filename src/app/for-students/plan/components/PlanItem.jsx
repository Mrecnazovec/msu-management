'use client'
import Link from 'next/link'
import { useState } from 'react';

const PlanItem = (data) => {
	
	const [activeCourse, setActiveCourse] = useState(1);

 

	return (
		<div>
			<div className="navPanel">
        <p className={activeCourse == 1 ? 'active' : 'disable'} onClick={() => setActiveCourse(1)} style={{ cursor: 'pointer' }}>
          1 курс
        </p>
        <p className={activeCourse == 2 ? 'active' : 'disable'} onClick={() => setActiveCourse(2)} style={{ cursor: 'pointer' }}>
          2 курс
        </p>
        <p className={activeCourse == 3 ? 'active' : 'disable'} onClick={() => setActiveCourse(3)} style={{ cursor: 'pointer' }}>
          3 курс
        </p>
        <p className={activeCourse == 4 ? 'active' : 'disable'} onClick={() => setActiveCourse(4)} style={{ cursor: 'pointer' }}>
          4 курс
        </p>
      </div>
			{data.data.map((item) => (
				<div className={activeCourse == item.idCourse ? 'active' : 'disable'} key={item._id}>
					<h2>{item.course}</h2>
					<table>
						<thead>
							<tr>
								<th>Предмет</th>
								<th>{item.thead.thOne}</th>
								<th>{item.thead.thTwo}</th>
								<th>Итог</th>
							</tr>
						</thead>
						<tbody>
							{item.tbody.map((prop) => (
								<tr key={prop.title}>
									<td>{prop.titlePath ? <Link href={prop.titlePath}>{prop.title}</Link> : prop.title}</td>
									<td>{prop.tdOne ? prop.tdOne : '-'}</td>
									<td>{prop.tdTwo ? prop.tdTwo : '-'}</td>
									<td>{prop.result}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			))}
		</div>
	)
}

export default PlanItem
