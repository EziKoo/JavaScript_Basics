// 深拷贝
export const customDeepCopy = (obj) => {
	if (obj === null || typeof obj !== 'object') return obj
	const result = Array.isArray(obj) ? [] : {}
	for (const key in obj) {
		if (Reflect.has(obj, key)) {
			if (typeof obj[key] === 'object') {
				// 深拷贝日期类型
				if (obj[key] instanceof Date) {
					result[key] = new Date(obj[key].valueOf())
				} else {
					result[key] = customDeepCopy(obj[key]) // 递归复制
				}
			} else {
				result[key] = obj[key]
			}
		}
	}
	return result
}