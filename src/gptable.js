export const Gptable = () => {
    return (
        <table>
				<thead>
					<tr>
						<th>Score</th>
						<th>Grade</th>
					</tr>
					</thead>
					<tbody>
						<tr>
							<td>70% and above</td>
							<td>A</td>
						</tr>
						<tr>
							<td>60 - 69</td>
							<td>B</td>
						</tr>
						<tr>
							<td>50 - 59</td>
							<td>C</td>
						</tr>
						<tr>
							<td>45 - 49</td>
							<td>D</td>
						</tr>
						<tr>
							<td>40 - 44</td>
							<td>E</td>
						</tr>
						<tr>
							<td>0 - 39</td>
							<td>F</td>
						</tr>
					</tbody>
			</table>
    )
}