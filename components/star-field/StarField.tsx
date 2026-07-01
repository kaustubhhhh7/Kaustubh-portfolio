import React, { useCallback, useEffect, useRef } from 'react'

/**
 * Props for the StarField component.
 */
interface StarFieldProps {
    /**
     * Factor to control the speed of the star field animation.
     * @default 0.05
     */
    speedFactor?: number

    /**
     * Background color of the star field.
     * @default 'black'
     */
    backgroundColor?: string

    /**
     * RGB color of the stars.
     * @default [255, 255, 255]
     */
    starColor?: [number, number, number]

    /**
     * Number of stars to render in the star field.
     * @default 5000
     */
    starCount?: number
}

export const StarField: React.FC<StarFieldProps> = ({
    speedFactor = 0.05,
    backgroundColor = 'black',
    starColor = [255, 255, 255],
    starCount = 5000
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current
        if (canvas) {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            handleResize()
            window.addEventListener('resize', handleResize)
        }

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [handleResize])

    useEffect(() => {
        const canvas = canvasRef.current
        const canvasRendering = canvas?.getContext('2d')

        if (!canvas || !canvasRendering) {
            return
        }

        const makeStars = (count: number) => {
            return Array.from({ length: count }, () => ({
                x: Math.random() * 1600 - 800,
                y: Math.random() * 900 - 450,
                z: Math.random() * 1000
            }))
        }

        const stars = makeStars(starCount)

        const clear = () => {
            canvasRendering.fillStyle = backgroundColor
            canvasRendering.fillRect(0, 0, canvas.width, canvas.height)
        }

        const putPixel = (x: number, y: number, brightness: number) => {
            canvasRendering.fillStyle = `rgba(${starColor[0]}, ${starColor[1]}, ${starColor[2]}, ${brightness})`
            canvasRendering.fillRect(x, y, 1, 1)
        }

        const moveStars = (distance: number) => {
            stars.forEach((star) => {
                star.z -= distance
                if (star.z <= 1) {
                    star.z += 1000
                }
            })
        }

        let prevTime: number
        let animationFrameId: number

        const tick = (time: number) => {
            // Update canvas dimensions on each frame to handle zoom
            const w = canvas.width
            const h = canvas.height

            const elapsed = time - (prevTime || time)
            prevTime = time

            moveStars(elapsed * speedFactor)
            clear()

            const cx = w / 2
            const cy = h / 2

            stars.forEach((star) => {
                const x = cx + star.x / (star.z * 0.001)
                const y = cy + star.y / (star.z * 0.001)

                // Use canvas dimensions instead of window dimensions
                if (x >= 0 && x < w && y >= 0 && y < h) {
                    const d = star.z / 1000.0
                    const b = 1 - d * d
                    putPixel(x, y, b)
                }
            })

            animationFrameId = requestAnimationFrame(tick)
        }

        animationFrameId = requestAnimationFrame(tick)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [starColor, backgroundColor, speedFactor, starCount])

    return (
        <canvas
            ref={canvasRef}
            id={'starfield'}
            role={'img'}
            style={{
                padding: 0,
                margin: 0,
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1,
                opacity: 1,
                pointerEvents: 'none',
                mixBlendMode: 'screen'
            }}
        />
    )
}

export default StarField
